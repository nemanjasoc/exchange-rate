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

<style lang="scss" scoped>
@import 'src/scss/variables';
@import 'src/scss/mixins';

.currency-converter {
	margin-bottom: $base-margin;
}

.currency-converter a {
	@include link;

	&:hover {
		color: white;
	}

	&:before {
		@include before;
	}

	&:hover:before {
		@include hover-before;
	}
}

.main-header {
	text-align: center;
	padding-bottom: $base-padding - 20;
}

.title {
	font-size: $base-font-size + 18;
	font-weight: $base-font-weight;
	position: relative;
	padding-bottom: $base-padding - 30;
	margin: 0;
	letter-spacing: 2px;
	color: white;

	&::after {
		content: '';
		position: absolute;
		@include transfrom-title;
		left: 50%;
		bottom: 11px;
		width: 250px;
		border-bottom: 2px solid white;
	}
}

.subtitle {
	@include color-and-font-size;
}

.baseCurrency {
	@include color-and-font-size;
	padding-top:$base-padding - 30;
	font-weight: $base-font-weight;
}
</style>
