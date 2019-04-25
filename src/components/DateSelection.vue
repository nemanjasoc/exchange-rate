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
				console.log("prosledjeni date u customFormatter: ", this.date)
				console.log("formatiran u YYYY-MM-DD: ", moment(this.date).format('YYYY-MM-DD'))
				return moment(this.date).format('YYYY-MM-DD');
			},
			showCurrenciesOnTheDate() {
				console.log("showCurrenciesOnTheDate: ", this.customFormatter())
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