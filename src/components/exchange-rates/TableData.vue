<template>
	<div id="main-content">
		<div class="table-wrapper">
			<table>
				<thead>
					<tr>
						<th>LANDMARK</th>
						<th>VALUE</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="rate in randomRates">
						<div class="currency-landmark">{{ rate.currency }}</div>
						<div class="currency-value">{{ rate.value.toFixed(4) }}</div>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters([
			'randomRates'
		])
	}
}
</script>

<style lang="scss" scoped>
@import 'src/scss/mixins';
@import 'src/scss/variables';

#main-content {
	@include flexbox-center; 
}

.table-wrapper {
	@include base-width;
	@include wrapper-style;
	padding: 0 30px 20px 30px;
	margin: $base-margin;
}

table {
	@include base-width;
	border-collapse: collapse;
	font-size: 1rem;
	color: white;
}

th {
	border-bottom: 4px solid #ddd;
	color: #888;
	font-size: 0.75rem;
	padding: $base-all-paddings;
}

.currency-value {
	@include table-data-style;
}

.currency-landmark {
	@include table-data-style;
	font-weight: $base-font-weight;
}
</style>
