<script>
	let people = [
		{name: "Yoshi", beltColour: "black", age: 25, id: 1}, 
		{name: "Mario", beltColour: "orange", age: 45, id: 2}, 
		{name: "Harry", beltColour: "brown", age: 35, id: 3}
	]

	const handleClick = (e, id)=>{
		// delete the person from people
		// console.log(id);

		people = people.filter((person)=> person.id != id)
		console.log(e);
	}
</script>

<main>
	{#each people as person (person.id)} <!-- person代表 陣列裡的每一個人-->
		<div>
			<h4>{person.name}</h4>
			<p>{person.age} years old, {person.beltColour} belt.</p>
			<!-- <button on:click={handleClick(person.id)}>delete</button> -->
			<!-- <button on:click={()=>{
				console.log("clicked me");
			}}>delete</button> -->
			<!-- <button on:click={()=>{
				handleClick(person.id)
			}}>delete</button> -->

			<button on:click={(e)=>
				handleClick(e, person.id)
			}>delete</button>
		</div>
	{:else} <!-- 如果陣列裡面沒有資料就顯示... -->
		<p>There are no people to show...</p>
	{/each}
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