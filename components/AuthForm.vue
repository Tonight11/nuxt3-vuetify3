<script setup lang="ts"></script>

<template>
	<div class="log-in">
		<img class="logo" src="~/assets/img/logo.svg" alt="logo" />
		<h2 class="title">Log in to your account</h2>
		<AuthFormItem class="log-in__form" />
		<div class="help">
			Can’t log in to your account?
			<nuxt-link to="/help">Ask support</nuxt-link>
		</div>
	</div>
</template>

<style lang="scss">
	a {
		font-weight: 600;
		font-size: 14px;
		color: #6941c6;
		text-decoration: none;
	}
	.log-in {
		max-width: 360px;
		text-align: center;
		width: 100%;
		margin: 0 auto 0;
		padding: 0 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;

		&__form {
			margin-bottom: 32px;
		}
	}

	.logo {
		width: 48px;
		height: 36px;
		margin: 0 auto 24px;
	}

	.title {
		margin-bottom: 32px;
	}

	.help {
		font-weight: 400;
		font-size: 14px;
		color: #475467;
	}
</style>
