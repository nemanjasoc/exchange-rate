<template>
	<div class="main-header">
		<div class="currency-converter"> 
			<router-link to="/currency-converter"><a>Currency Converter</a></router-link>
		</div>
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
		])
	}
}
</script>

<style scoped>
	.currency-converter {
		margin-bottom: 20px;
	}

	.currency-converter a {
		font-size: 20px;
		font-weight: 600;
		color: #888;
		position: relative;
		text-decoration: none;
	}

	.currency-converter a:hover {
		color: #9e0144;
	}

	.currency-converter a:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		top: 26px;
		bottom: 0;
		left: 0;
		background-color: white;
		visibility: hidden;
		-webkit-transform: scaleX(0);
		transform: scaleX(0);
		-webkit-transition: all 0.3s ease-in-out 0s;
		transition: all 0.3s ease-in-out 0s;
	}

	.currency-converter a:hover:before {
		visibility: visible;
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}

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
		color: white;
	}

	.title::after {
		content: '';
		position: absolute;
		left: 50%;
		-webkit-transform: translate(-50%, 0);
		transform: translate(-50%, 0);
		bottom: 11px;
		width: 250px;
		border-bottom: 2px solid white;
	}
	
	.baseCurrency,
	.subtitle {
		font-size: 24px;
		color: white;
	}

	.baseCurrency {
		padding-top: 20px;
		font-weight: 700;
	}
</style>
