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
				id="1"
				variant="outlined"
				append-inner-icon="mdi-information-outline"
				v-model="email.value.value"
				:error-messages="email.errorMessage.value"
			></v-text-field>
		</div>

		<div class="form-control">
			<label for="2">Password</label>
			<v-text-field
				type="password"
				id="2"
				variant="outlined"
				append-inner-icon="mdi-information-outline"
				v-model="password.value.value"
				:error-messages="password.errorMessage.value"
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

		<v-btn class="form-main__btn" type="submit"> submit </v-btn>
	</form>
</template>

<style lang="scss" scoped>
	.additional {
		display: flex;
		align-items: center;
		margin-bottom: 24px;
	}
	
	.form-control {
		text-align: left;

		& label {
			display: block;
			margin-bottom: 6px;
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
</style>
