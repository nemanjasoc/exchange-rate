<template>
	<div id="main-content">
	<table>
		<thead>
			<tr>
				<th>LANDMARK</th>
				<th>VALUE</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="rate in rates">
				<div class="currency-landmark">{{ rate.currency }}</div>
				<div class="currency-value">{{ rate.value }}</div>
			</tr>
		</tbody>
	</table>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		computed: {
			...mapGetters([
				'baseCurrency',
				'rates'
			])
		}
	}
</script>

<style scoped>
	#main-content {
		display: flex;
		justify-content: center;
	}

	table {
		border-collapse: collapse;
		max-width: 800px;
		width: 100%;
		font-size: 1rem;
	}
	/*
	th, td {
		padding: 12px;
		text-align: left;
		border-bottom: 1px solid #ddd;
		width: 50%;
	}
	*/
	th {
		border-bottom: 4px solid #ddd;
		color: #888;
		font-size: 0.75rem;
		padding: 10px 0px;
	}
	
	.currency-value,
	.currency-landmark {
		display: table-cell;
		padding: 10px 0px;
		border-bottom: 1px solid #e9e9e9;
		text-align: center;
	}

	.currency-landmark {
		font-weight: 700;
	}

</style>

