<template>
    <div class="user-container">
        <div>
            User
        </div>
        <div class="user-description">
            <slot name="username">
            </slot>
            <div class="time">
                <slot name="time">
                </slot>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    props:{
        info: Object
    },
}
</script>

<style scope>
.user-container {
    align-items:center;
}
.user-description {padding-left:8px;}
</style>