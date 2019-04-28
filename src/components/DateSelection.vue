<template>
	<div class="date-selection">
		<app-datepicker v-model="date" @selected="showCurrenciesOnTheDate" :format="customFormatter" placeholder="choose date"></app-datepicker>
	</div>
</template>

<script scoped>
	import Datepicker from 'vuejs-datepicker';
	import * as moment from 'moment';
	
	export default {
		data() {
			return {
				date: new Date()
			}
		},
		methods: {
			customFormatter() {
				return moment(this.date).format('YYYY-MM-DD');
			},
			showCurrenciesOnTheDate() {
				this.$emit("data-change", this.customFormatter());
			}			  
		},
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