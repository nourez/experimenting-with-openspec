<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { tagsStore, type Tag } from "$lib/stores/tags/tagsStore";
    import { fly, slide } from "svelte/transition";

    const dispatch = createEventDispatcher<{
        tagschange: Tag[];
    }>();

    export let selectedTags: Tag[] = [];
    let tags: Tag[] = [...selectedTags];
    let allTags: Tag[] = [];
    let filteredTags: Tag[] = [];
    let showDropdown = false;
    let inputValue = "";
    let inputElement: HTMLInputElement;
    let dropdownElement: HTMLElement;

    onMount(() => {
        // Subscribe to all available tags
        const unsubscribe = tagsStore.subscribe((storeTags) => {
            allTags = storeTags;
            filteredTags = storeTags;
        });

        // Add click outside listener to close dropdown
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownElement &&
                !dropdownElement.contains(event.target as Node) &&
                !inputElement.contains(event.target as Node)
            ) {
                showDropdown = false;
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            unsubscribe();
            document.removeEventListener("click", handleClickOutside);
        };
    });

    // Filter available tags based on input
    function filterTags() {
        if (!inputValue.trim()) {
            filteredTags = allTags.filter(
                (tag) => !tags.some((selected) => selected.id === tag.id),
            );
        } else {
            filteredTags = allTags.filter(
                (tag) =>
                    !tags.some((selected) => selected.id === tag.id) &&
                    tag.name.toLowerCase().includes(inputValue.toLowerCase()),
            );
        }
    }

    // Toggle tag selection
    function toggleTag(tag: Tag) {
        if (tags.some((t) => t.id === tag.id)) {
            removeTag(tag);
        } else {
            addTag(tag);
        }
        inputValue = "";
        showDropdown = false;
    }

    // Add a tag to selection
    function addTag(tag: Tag) {
        tags = [...tags, tag];
        selectedTags = tags;
        dispatch("tagschange", tags);
    }

    // Remove a tag from selection
    function removeTag(tag: Tag) {
        tags = tags.filter((t) => t.id !== tag.id);
        selectedTags = tags;
        dispatch("tagschange", tags);
    }

    // Handle input changes
    function handleInput() {
        filterTags();
        showDropdown = true;
    }

    // Handle keyboard events
    function handleKeydown(event: KeyboardEvent) {
        if (event.key === "Enter" && inputValue.trim()) {
            // Create a new tag if it doesn't exist
            const existingTag = allTags.find(
                (tag) => tag.name.toLowerCase() === inputValue.toLowerCase(),
            );

            if (existingTag) {
                if (!tags.some((t) => t.id === existingTag.id)) {
                    addTag(existingTag);
                }
            } else {
                // Create new tag
                const newTag = tagsStore.addTag(inputValue.trim());
                addTag(newTag);
            }

            inputValue = "";
            showDropdown = false;
        } else if (
            event.key === "Backspace" &&
            !inputValue &&
            tags.length > 0
        ) {
            // Remove last tag when backspace is pressed on empty input
            removeTag(tags[tags.length - 1]);
        } else if (event.key === "Escape") {
            showDropdown = false;
        }
    }

    // Sync with prop when it changes
    $: if (selectedTags !== tags) {
        tags = [...selectedTags];
    }

    // Focus input when clicking container
    function focusInput() {
        inputElement.focus();
        showDropdown = true;
    }
</script>

<div
    class="tag-input-container"
    role="button"
    tabindex="0"
    on:click={focusInput}
    on:keydown={(e) => e.key === "Enter" && focusInput()}
>
    <div class="selected-tags">
        {#each tags as tag (tag.id)}
            <div
                class="tag-pill"
                style="--tag-color: {tag.color || '#6b7280'}"
                transition:fly={{ y: 10, duration: 200 }}
            >
                {tag.name}
                <button
                    type="button"
                    class="remove-tag"
                    on:click|stopPropagation={() => removeTag(tag)}
                    aria-label="Remove {tag.name} tag"
                >
                    ×
                </button>
            </div>
        {/each}
        <input
            bind:this={inputElement}
            type="text"
            bind:value={inputValue}
            placeholder={tags.length === 0 ? "Add tags..." : ""}
            on:input={handleInput}
            on:keydown={handleKeydown}
            on:focus={() => (showDropdown = true)}
        />
    </div>

    {#if showDropdown && filteredTags.length > 0}
        <div
            bind:this={dropdownElement}
            class="tag-dropdown"
            transition:slide={{ duration: 200 }}
        >
            {#each filteredTags as tag (tag.id)}
                <div
                    class="tag-option"
                    role="option"
                    tabindex="0"
                    aria-selected={tags.some((t) => t.id === tag.id)}
                    on:click|stopPropagation={() => toggleTag(tag)}
                    on:keydown={(e) => e.key === "Enter" && toggleTag(tag)}
                    style="--tag-color: {tag.color || '#6b7280'}"
                >
                    <div class="tag-color-indicator"></div>
                    {tag.name}
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .tag-input-container {
        position: relative;
        width: 100%;
    }

    .selected-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.375rem;
        padding: 0.5rem;
        border: 1px solid #334155;
        border-radius: 0.375rem;
        background: #1e293b;
        min-height: 2.625rem;
    }

    .selected-tags:focus-within {
        outline: none;
        border-color: #60a5fa;
        box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.2);
    }

    input {
        border: none;
        outline: none;
        background: transparent;
        color: #fff;
        font-size: 0.875rem;
        min-width: 120px;
        flex-grow: 1;
        padding: 0;
    }

    input::placeholder {
        color: #64748b;
    }

    .tag-pill {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.25rem 0.5rem;
        background-color: #1e293b;
        border: 1px solid var(--tag-color);
        border-radius: 9999px;
        font-size: 0.75rem;
        color: var(--tag-color);
    }

    .remove-tag {
        background: none;
        border: none;
        color: var(--tag-color);
        cursor: pointer;
        font-size: 1rem;
        line-height: 1;
        padding: 0;
        margin-left: 0.125rem;
        opacity: 0.7;
        transition: opacity 0.2s;
    }

    .remove-tag:hover {
        opacity: 1;
    }

    .tag-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        max-height: 200px;
        overflow-y: auto;
        background: #0f172a;
        border: 1px solid #334155;
        border-radius: 0.375rem;
        margin-top: 0.25rem;
        z-index: 10;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }

    .tag-option {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 0.75rem;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .tag-option:hover {
        background-color: #1e293b;
    }

    .tag-color-indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: var(--tag-color);
    }
</style>
