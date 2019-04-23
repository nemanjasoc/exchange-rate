<template>
	<div class="date-selection">
		<app-datepicker></app-datepicker>
	</div>
</template>

<script scoped>
	import Datepicker from 'vuejs-datepicker';
	export default {
		components: {
			appDatepicker: Datepicker
		}
	}
	
</script>

<style>
	.date-selection {
		display: flex;
		justify-content: center;
	}
</style>