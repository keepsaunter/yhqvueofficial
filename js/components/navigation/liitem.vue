<template>
	<router-link :to="link_data.path" tag="li">
		{{link_data.title}}
	</router-link>
</template>
<script>
	export default {
		props: ['link_data'],
	}
</script>