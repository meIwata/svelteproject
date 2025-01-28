<script>
	import Modal from "./Modal.svelte";'./Modal.svelte';
	import AddPersonForm from "./AddPersonForm.svelte";

	let showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
	}

	let people = [
		{name: "Yoshi", beltColour: "black", age: 25, id: 1}, 
		{name: "Mario", beltColour: "orange", age: 45, id: 2}, 
		{name: "Harry", beltColour: "brown", age: 35, id: 3}
	]

	const handleClick = (id)=>{
		// delete the person from people
		people = people.filter((person)=> person.id != id);
	}

</script>

<Modal {showModal} on:click={toggleModal}>
	<AddPersonForm />
</Modal>
<main>
	<button on:click|once={toggleModal}>Open Modal</button> <!-- 只能啟動一次 -->
	{#each people as person (person.id)} 
		<div>
			<h4>{person.name}</h4>
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