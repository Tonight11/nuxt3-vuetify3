<script setup lang="ts"></script>

<template>
	<div>
		<VitePwaManifest />
		<NuxtLoadingIndicator />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style lang="scss">
	body {
		height: 100vh;
		width: 100%;
		overflow: hidden;
		font-family: 'Inter';
	}

	.img {
		height: 100vh;
		width: 100%;
		object-fit: cover;
	}

	.hide {
		@media screen and (max-width: 900px) {
			display: none;
		}
	}
</style>
