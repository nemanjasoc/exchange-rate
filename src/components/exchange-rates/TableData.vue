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

<style scoped>
	#main-content {
		display: flex;
		justify-content: center;
	}
	
	.table-wrapper {
		display: flex;
		justify-content: center;
		max-width: 900px;
		width: 100%;
		margin-top: 20px;
		font-weight: 500;
		background-color: #282537;
		opacity: 0.9;
		color: white;
		border-radius: 15px;
		overflow: hidden;
	}

	table {
		border-collapse: collapse;
		max-width: 800px;
		width: 100%;
		font-size: 1rem;
		color: white;
		margin-bottom: 20px;
	}

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
