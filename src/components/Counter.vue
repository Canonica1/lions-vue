<template>
  <div class="hello">
				<section class="counter">
					<div class="counter__container _container">
						<div class="counter__row">
							<div class="counter__wallet">
								<a href="">Connect wallet</a>
							</div>
							<div class="counter__main ">
								<div class="counter__counter">
									<div class="counter__title"><span>W</span>aiting for the pre-sale</div>
									<div class="counter__label">pre-sale starts in</div>
									<div class="counter__numbers">
										<div class="counter__t">T -</div>
										<div class="counter__values">
											<div class="counter__value">
												<div class="counter__date">{{displayDays}}</div>
												<div class="counter__name">DAYS</div>
											</div>
											<div class="counter__value">
												<div class="counter__date">{{displayHours}}</div>
												<div class="counter__name">HRS</div>
											</div>
											<div class="counter__value">
												<div class="counter__date">{{displayMinutes}}</div>
												<div class="counter__name">MIN</div>
											</div>
											<div class="counter__value">
												<div class="counter__date">{{displaySecs}}</div>
												<div class="counter__name">SEC</div>
											</div>
											<div class="counter__value">
												<div class="counter__date not-l">{{displayMil}}</div>
												<div class="counter__name">MS</div>
											</div>
										</div>
									</div>
									<div class="counter__text">Please use Crome/Firefox with metamask extration for PC or metamask app for mobile</div>
								</div>
								<div class="counter__button">
									<a href="">Mint</a>
								</div>
							</div>
						</div>
					</div>
				</section>

  </div>
</template>

<script>

export default {
	data: ()=>  ({
		displayDays: 0,
		displayHours:0,
		displayMinutes:0,
		displaySecs:0,
		displayMil:0,
	}),
	computed: {
		_mil() { return this._seconds / 100},
		_seconds: () => 1000,
		_minutes(){
			return this._seconds * 60
		},
		_hours(){
			return this._minutes * 60
		},
		_days(){
			return this._hours * 24
		},
	},
	mounted() {
		this.showRemaining();
	},
	methods: {
		showRemaining() {
			setInterval(()=>{

				const now = new Date();
				const end = new Date(2021, 9 , 15, 0 ,0, 0, 0);
				const distance = end.getTime() - now.getTime();

				const days = Math.floor((distance / this._days));
				const hours = Math.floor((distance % this._days) / this._hours);
				const minutes = Math.floor((distance % this._hours) / this._minutes);
				const seconds = Math.floor((distance % this._minutes) / this._seconds);
				const mil = Math.floor((distance % this._seconds) / this._mil);
				this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
				this.displaySecs = seconds < 10 ? "0" + seconds : seconds;
				this.displayHours = hours < 10 ? "0" + hours : hours;
				this.displayDays = days < 10 ? "0" + days : days;
				this.displayMil = mil < 10 ? "0" + mil : mil;

				}, 1);
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

