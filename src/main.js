import App from './App4.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;