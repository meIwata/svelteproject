<script>
	import Modal from "./Modal.svelte";'./Modal.svelte';

	let people = [
		{name: "Yoshi", beltColour: "black", age: 25, id: 1}, 
		{name: "Mario", beltColour: "orange", age: 45, id: 2}, 
		{name: "Harry", beltColour: "brown", age: 35, id: 3}
	]

	const handleClick = (id)=>{
		// delete the person from people
		people = people.filter((person)=> person.id != id)
	}

	let num = 1;
</script>

<!-- {#if num > 20}
	<p>Greater than 20</p>
{:else if num > 5}
	<p>Greater than 5</p>
{:else}
	<p>Not greater than 5</p>
{/if} -->

<Modal /> <!-- 引入Modal -->
<main>
	{#each people as person (person.id)} <!-- person代表 陣列裡的每一個人-->
		<div>
			<h4>{person.name}</h4>
			<!-- 加入判斷: if, else if, else -->
			<!-- {#if person.beltColour === "black"}
				<p><strong>忍者</strong></p>
		  	{:else if person.beltColour === "orange"}
				<p><strong>橘子汽水</strong></p>
		  	{:else}
				<p><strong>判別以外的東西</strong></p>
		  	{/if} -->
			
			<!-- 加入判斷: 三元運算 -->
			<p>
				<strong>
				  {person.beltColour === "black" ? "忍者" :
				   person.beltColour === "orange" ? "橘子汽水" : "判別以外的東西"}
				</strong>
			</p>
			<p>{person.age} years old, {person.beltColour} belt.</p>
			<button on:click={()=>
				handleClick(person.id)
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