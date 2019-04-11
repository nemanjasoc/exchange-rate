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
				<td>{{ rate.name }}</td>
				<td>{{ rate.value }}</td>
			</tr>
		</tbody>
	</table>
	</div>
</template>

<script>
	export default {
		props: ['rates']
	}
</script>

<style scoped>
	table {
		border-collapse: collapse;
		width: 100%;
	}

	th, td {
		padding: 12px;
		text-align: left;
		border-bottom: 1px solid #ddd;
		width: 50%;
	}
</style>