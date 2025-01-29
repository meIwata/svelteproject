<script>
    let name;
    let beltColour;
    let age;

    // 使用屬性Attribute
    // let fighting = false;
    // let sneaking = true;
    // let running = true;

    // 使用Group Attributes
    let skills = [];


    const handleSubmit = ()=>{
        // console.log(name, beltColour, age, fighting, sneaking, running);
        console.log(name, beltColour, age, skills);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name}>
    <!-- <input type="text" placeholder="belt colour" bind:value={beltColour}> -->
    <input type="number" bind:value={age}>
    <label>Skills:</label>

    <!-- checkbox使用 -->
    <!-- 使用屬性Attribute -->
    <!-- <input type="checkbox" bind:checked={fighting}>fighting<br>
    <input type="checkbox" bind:checked={sneaking}>sneaking<br>
    <input type="checkbox" bind:checked={running}>running<br> -->

    <!-- 使用Group Attributes -->
    <input type="checkbox" bind:group={skills} value="fighting">fighting<br>
    <input type="checkbox" bind:group={skills} value="sneaking">sneaking<br>
    <input type="checkbox" bind:group={skills} value="running">running<br>


    <!-- selectbox使用 -->
    <label>Belt colour:</label>
    <select bind:value={beltColour}>
        <option value="black">black</option>
        <option value="orange">orange</option>
        <option value="brown">brown</option>
        <option value="white">white</option>
    </select>


    <button>Add Person</button>
</form>

<style>
</style>