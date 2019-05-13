<template>
	<div class="date-selection">
		<app-datepicker v-model="date" @input="showCurrenciesOnTheDate" :format="customFormatter" :disabledDates="disabledDates"></app-datepicker>
	</div>
</template>

<script scoped>
import Datepicker from 'vuejs-datepicker';
import * as moment from 'moment';

export default {
	data() {
		return {
			date: new Date(),
			disabledDates: {
				from: new Date(),
				days: [6, 0]
			}
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

<style lang="scss">
@import 'src/scss/mixins';

.date-selection {
	@include flexbox-center;
}
</style>
