<template>
	<div class="currency-converter-page">
		<div class="exchange-rates"> 
			<router-link to="/exchange-rates"><a>Exchange Rates</a></router-link>
		</div>
		<h1>Currency Converter</h1>
		<div class="currency-wrapper">
			<div class="buttons">
				<button type="button" class="buy">Buy EUR</button>
				<button type="button" class="sell">Sell EUR</button>
			</div>
			<div class="inputs">
				<div class="amount">
					<label>Amount</label>
					<input type="text" value="1" v-model="amount">
				</div>
				<div class="from">
					<label>From</label>
					<select>
						<option value='currency1'>jnkjcn</option>
						<option value='currency1'>jnkjcn</option>
						<option value='currency1'>jnkjcn</option>
						<option value='currency1'>jnkjcn</option>
					</select>
				</div>
				<div class="to">
					<label>To</label>
					<select>
						<option value='currency2'>efqdfww</option>
						<option value='currency2'>efqdfww</option>
						<option value='currency2'>efqdfww</option>
						<option value='currency2'>efqdfww</option>
					</select>
				</div>
			</div>
			<div class="result">
				<div class="amount-from">Amount from = </div>
				<div class="result-to">Result to</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				from: '',
				to: '',
				amount: '1'				
			}
		}
	}
</script>

<style scoped>
	.currency-converter-page {
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
	}

	.exchange-rates {
		padding-top: 50px;
	}

	.exchange-rates a {
		font-size: 20px;
		font-weight: 600;
		color: #888;
		position: relative;
		text-decoration: none;
	}

	.exchange-rates a:hover {
		color: white;
	}

	.exchange-rates a:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		top: 20px;
		bottom: 0;
		left: 0;
		background-color: white;
		visibility: hidden;
		-webkit-transform: scaleX(0);
		transform: scaleX(0);
		-webkit-transition: all 0.3s ease-in-out 0s;
		transition: all 0.3s ease-in-out 0s;
	}

	.exchange-rates a:hover:before {
		visibility: visible;
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}

	h1 {
		color: white;
	}

	.currency-wrapper {
		max-width: 900px;
		width: 100%;
		background-color: #282537;
		opacity: 0.9;
		border-radius: 15px;
		overflow: hidden;
		margin: 0 auto;
	}

	.select-country{
		width: 20%;
		height: 20%;
		background: white;
	}

	.buttons {
		display: flex;
		justify-content: center;
		padding-top: 50px;
	}

	.buy {
		font-size: 15px;
		margin-right: 25px;
		width: 120px;
		height: 50px;
		border-radius: 15px 0px 0px 15px;
		cursor: pointer;
		background-color: #fbbf08;
		color: white;
		font-weight: 600;
	}

	.buy:active {
		background-color: #2196f3;
	}

	.sell {
		font-size: 15px;
		margin-left: 25px;
		width: 120px;
		height: 50px;
		border-radius: 0px 15px 15px 0px;
		cursor: pointer;
		background-color: #2196f3;
		color: white;
		font-weight: 600;
	}

	.sell:active {
		background-color: #fbbf08;
	}

	.inputs {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding-top: 50px;
	}

	.amount {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	label {
		display: flex;
		color: white;
		font-size: 17px;
		margin-bottom: 5px;
	}

	input[type=text] {
		max-width: 250px;
		width: 100%;
		height: 42px;
		border-radius: 10px;
		font-size: 30px;
		padding-left: 10px;
	}

	select {
		max-width: 250px;
		width: 100%;
		height: 50px;
		border-radius: 10px;
		font-size: 30px;
		padding: 0px 10px;
	}

	.result {
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: 50px 0px;
	}

	.amount-from {
		color: white;
		font-size: 30px;
	}

	.result-to {
		color: white;
		font-size: 50px;
	}
</style>
