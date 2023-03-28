<script setup lang="ts">
	import { useField, useForm } from 'vee-validate';
	const { handleSubmit } = useForm({
		validationSchema: {
			password(value: string) {
				if (value?.length >= 6) return true;

				return 'Please fill in your password';
			},
			email(value: any) {
				if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

				return 'Please check email address';
			},
		},
	});

	const password = useField('password');
	const email = useField('email');
	const ex4 = ref(['indigo']);

	const submit = handleSubmit(values => {
		alert(JSON.stringify(values, null, 2));
	});
</script>

<template>
	<form @submit.prevent="submit" class="form-main">
		<div class="form-control">
			<label for="1">Email</label>
			<v-text-field
				density="compact"
				class="mb-5"
				id="1"
				variant="outlined"
				:append-inner-icon="
					email.errorMessage.value ? 'mdi-information-outline' : ''
				"
				v-model="email.value.value"
				:error-messages="email.errorMessage.value"
				hide-details="auto"
			></v-text-field>
		</div>

		<div class="form-control">
			<label for="2">Password</label>
			<v-text-field
				density="compact"
				class="mb-1"
				type="password"
				id="2"
				variant="outlined"
				:append-inner-icon="
					password.errorMessage.value ? 'mdi-information-outline' : ''
				"
				v-model="password.value.value"
				:error-messages="password.errorMessage.value"
				hide-details="auto"
			></v-text-field>
		</div>

		<div class="additional">
			<v-checkbox
				label="Remember me"
				v-model="ex4"
				color="indigo"
				value="indigo"
				hide-details
			></v-checkbox>
			<nuxt-link to="/forgot">Forgot password</nuxt-link>
		</div>

		<v-btn class="form-main__btn" type="submit" height="44"> submit </v-btn>
	</form>
</template>

<style lang="scss">
	.additional {
		display: flex;
		align-items: center;
		margin-bottom: 4px;
	}

	.form-control {
		text-align: left;

		& label {
			display: block;
			margin-bottom: 6px;
			font-weight: 500;
			font-size: 14px;
			color: #344054;
		}
	}
	.form-main {
		display: flex;
		flex-direction: column;
		&__btn {
			text-align: center;
			background-color: #7f56d9;
			color: white;
		}
	}

	.v-input {
		border-radius: 8px;
		overflow: hidden;
	}

	.v-field__outline__start {
		border-top-left-radius: 8px !important;
		border-bottom-left-radius: 8px !important;
	}
	.v-field__outline__end {
		border-top-right-radius: 8px !important;
		border-bottom-right-radius: 8px !important;
	}

	.v-field__outline__end,
	.v-field__outline__start {
		border-color: #d0d5dd;
	}

	.v-field--error {
		.v-field__outline__end,
		.v-field__outline__start {
			border-color: #f04438;
		}
	}

	.v-field--error:not(.v-field--disabled) .v-field__append-inner > .v-icon {
		color: #f04438;
	}

	.v-label {
		font-size: 14px;
		color: #344054;
	}

	.v-messages__message {
		color: #f04438;
	}
</style>
