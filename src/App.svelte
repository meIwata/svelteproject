<script>
	// let name = "Yoshi";
	let firstname = "Emily";
	let lastname = "Smith";

	$: fullName = `${firstname} ${lastname}`;
	
	// 可以在console印出看看
	// $: console.log(beltColour);
	$: {
		console.log(beltColour);
		console.log(fullName);
	}

	let beltColour = "black"

	const handleClick = () => {
		beltColour = "orange"
	}

	const handleInput = (e)=>{
		beltColour = e.target.value
	}
</script>

<main>
	<!-- <h1>Hello {name}!</h1> -->

	<!-- 也可以把顏色在style裡面 -->
	<!-- <p style="color: {beltColour};">{beltColour} belt</p> -->
	<!-- <button on:click={handleClick}>update belt colour</button> -->

	<p>{fullName} - {beltColour} belt</p>

	<!-- Data Binding -->
	<!-- <input type="text" on:input={handleInput} value={beltColour}> -->

	<input type="text" bind:value={firstname}>
	<input type="text" bind:value={lastname}>
	<input type="text" bind:value={beltColour}>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>