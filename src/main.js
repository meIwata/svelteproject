import App from './App5.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;