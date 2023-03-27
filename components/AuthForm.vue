<script setup lang="ts"></script>

<template>
	<div class="log-in">
		<img class="logo" src="~/assets/img/logo.svg" alt="logo" />
		<h2 class="title">Log in to your account</h2>
		<AuthFormItem />
	</div>
</template>

<style lang="scss" scoped>
	.log-in {
		max-width: 360px;
		text-align: center;
		width: 100%;
		margin: 20% auto 0;
	}

	.logo {
		margin-bottom: 24px;
	}

	.title {
		margin-bottom: 32px;
	}
</style>
