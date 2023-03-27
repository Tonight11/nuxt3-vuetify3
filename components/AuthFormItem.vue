<script setup lang="ts">
	import { useField, useForm } from 'vee-validate';
	const { handleSubmit } = useForm({
		validationSchema: {
			phone(value: any) {
				if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

				return 'Phone number needs to be at least 9 digits.';
			},
			email(value: any) {
				if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

				return 'Must be a valid e-mail.';
			},

			checkbox(value: string) {
				if (value === '1') return true;

				return 'Must be checked.';
			},
		},
	});

	const phone = useField('phone');
	const email = useField('email');
	const checkbox = useField('checkbox');

	const submit = handleSubmit(values => {
		alert(JSON.stringify(values, null, 2));
	});
</script>

<template>
	<form @submit.prevent="submit">
		<v-text-field
			class="form-control"
			v-model="email.value.value"
			error-messages="name.errorMessage.value"
		></v-text-field>

		<v-text-field
			class="form-control"
			v-model="phone.value.value"
			error-messages="Please fill in your password"
		></v-text-field>

		<v-checkbox
			v-model="checkbox.value.value"
			:error-messages="checkbox.errorMessage.value"
			value="1"
			label="Remember me"
			type="checkbox"
		></v-checkbox>

		<v-btn class="me-4" type="submit"> submit </v-btn>
	</form>
</template>

<style lang="scss">
	.v-text-field input {
		border: none;
		background-color: transparent;
	}
</style>
