<script setup lang="ts"></script>

<template>
	<v-app>
		<v-row>
			<v-col>
				<AuthForm />
			</v-col>
			<v-col class="hide">
				<img class="img" src="~/assets/img/sec.jpg" alt="" />
			</v-col>
		</v-row>
	</v-app>
</template>

<style lang="scss">
	body {
		height: 100vh;
		width: 100%;
		overflow: hidden;
	}

	.img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.hide {
		@media screen and (max-width: 900px) {
			display: none;
		}
	}
</style>
