<template>
        <quill-editor style="height: 100%;" 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
            123
        </quill-editor>
</template>

<script>
export default {
    name : 'fuwenben'
}
</script>

<style scoped>

</style>


