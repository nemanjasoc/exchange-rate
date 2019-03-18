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
	       		<template v-for="(value, key) in rate">
	      	 		<tr>
	       				<td>{{ key }}</td>
	       				<td>{{ value }}</td>
	       			</tr>
	       		</template>
	   		</tbody>
	    </table>
	</div>
</template>

<script>
	export default {
		props: ['rate']
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