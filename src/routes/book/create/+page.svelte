<script>
  import Template from "../../../components/Template.svelte";
</script>

<Template>
  <form action="" class="flex flex-col">
    <h2 class="text-3xl pb-10">Create a book</h2>
    <label class="pb-3">
      Name: 
      <input type="text" class="block" name="name">
    </label>
    <label class="pb-3">
      Book Cover Image:
      <input type="text" class="block" name="cover_img">
    </label>
    <label class="pb-3">
      Synopsis:
      <input type="text" class="block" name="synopsis">
    </label>
    <label class="pb-3">
      Year Pub:
      <input type="text" class="block" name="year_pub">
    </label>
    <label class="pb-3">
      Author:
      <input type="text" class="block" name="author">
    </label>
    <button type="submit" class="w-fit bg-blue-100 py-2 px-3 mt-3">Create</button>
  </form>
</Template>