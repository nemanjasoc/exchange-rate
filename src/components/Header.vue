<template>
	<div class="main-header">
		<h1 class="title">EXCHANGE RATES</h1>
		<div class="subtitle">On the day {{ dateOfRates }}</div>
		<div class="baseCurrency">Base currency {{ baseCurrency }}</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		computed: {
			...mapGetters([
				'baseCurrency',
				'dateOfRates',
				'rates'
			])
		}
	}
</script>

<style scoped>
	.main-header {
		text-align: center;
		padding: 0 0 50px 0;
		margin: 0 auto;
		width: 90%;
		max-width: 900px;
	}

	.title {
		font-size: 48px;
		font-weight: 700;
		position: relative;
		padding-bottom: 20px;
		margin: 0;
		letter-spacing: 2px;
	}

	.title::after {
		content: '';
		position: absolute;
		left: 50%;
		-webkit-transform: translate(-50%, 0);
		transform: translate(-50%, 0);
		bottom: 11px;
		width: 250px;
		border-bottom: 2px solid #000;
	}

	.subtitle {
		font-size: 24px;
	}

	.baseCurrency {
		font-size: 24px;
		padding-top: 20px;
		font-weight: 700;
	}
</style>