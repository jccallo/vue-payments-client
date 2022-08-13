<template>

<!-- cuerpo -->
<div class="container">
   <!-- titulo -->
   <div class="row align-items-center mb-2 mt-4">
      <div class="col-sm-6 col-12">
         <div class="h3">Clients</div>
      </div>
      <div class="col-sm-6 col-12">
         <div class="form-row form-inline justify-content-end">
            <div class="col-auto my-1">
               <router-link
                  :to="{ name: 'create' }"
                  class="btn btn-success"
               >
                  <i class="bi bi-plus-circle"></i> Add Client
               </router-link>
            </div>
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col">
         <div class="card mb-4">
            <!-- card body -->
            <div class="card-body table-responsive">
               <table class="table table-borderless table-sm">
                  <thead>
                     <tr>
                        <th scope="col">#</th>
                        <th scope="col">Client Name</th>
                        <th scope="col">Dob</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Payments</th>
                        <th scope="col">Total</th>
                        <th scope="col" class="text-right">Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-for="client in clients" :key="client.id">
                        <th scope="row">{{client.id}}</th>
                        <td>{{client.firstname}} {{client.lastname}}</td>
                        <td>{{client.dob}}</td>
                        <td>{{client.phone}}</td>
                        <td>{{client.email}}</td>
                        <td>{{client.address}}</td>
                        <td>{{client.payments}}</td>
                        <td>{{client.total}}</td>
                        <td class="text-right">
                           <div style="width: 100px; display: inline-block;">
                              <router-link :to="{ name: 'edit', params: { id: client.id } }" >Edit</router-link> |
                              <a href="" @click.prevent="deleteClient(client.id)" >Delete</a>
                           </div>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
</div>
</template>

<script>
export default {
   name: "IndexClient",
   data() {
      return {
         clients: [],
      };
   },
   created() {
      this.indexClient()
   },
   methods: {
      indexClient() {
         let url = "http://localhost:8000/api/client"
         this.axios.get(url).then((response) => {
            this.clients = response.data.clients;
            console.log(response.data);
         })
      },
      deleteClient(id) {
         this.$swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
         })
         .then((result) => {
            if (result.isConfirmed) {
               let url = "http://localhost:8000/api/client/" + id 
               this.axios.delete(url).then((response) => {
                  console.log(response.data);
                  this.indexClient();
               })
               this.$swal.fire(
                  'Deleted!',
                  'Your client has been deleted.',
                  'success'
               )
            }
         })
      }
   },
};
</script>
