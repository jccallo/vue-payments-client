<template>
   <!-- cuerpo -->
   <div class="container">
      <!-- titulo -->
      <div class="row align-items-center mb-2 mt-4">
         <div class="col-sm-6 col-12">
            <div class="h3">Create Client</div>
         </div>
         <div class="col-sm-6 col-12">
            <div class="form-row form-inline justify-content-end">
               <div class="col-auto my-1">
                  <router-link :to="{ name: 'index' }" class="btn btn-light">
                     Back to List
                  </router-link>
               </div>
            </div>
         </div>
      </div>
      <!-- cuerpo -->
      <div class="row">
         <div class="col">
            <div class="card mb-4">
               <!-- card body -->
               <div class="card-body table-responsive">
                  <form @submit.prevent="createClient">
                     <h4 class="card-title">Personal Information</h4>  
                     <div class="form-row">
                        <div class="col">
                           <div class="form-group">
                              <label>First Name:</label>
                              <input
                                 type="text"
                                 class="form-control"
                                 v-model="client.firstname"
                              />
                           </div>
                        </div>
                        <div class="col">
                           <div class="form-group">
                              <label>Last Name:</label>
                              <input
                                 type="text"
                                 class="form-control"
                                 v-model="client.lastname"
                              />
                           </div>
                        </div>
                        <div class="col">
                           <div class="form-group">
                              <label>Dob:</label>
                              <input
                                 type="date"
                                 class="form-control"
                                 v-model="client.dob"
                              />
                           </div>
                        </div>
                     </div>
                     <div class="form-row mb-4">
                        <div class="col">
                           <div class="form-group">
                              <label>Phone:</label>
                              <input
                                 type="text"
                                 class="form-control"
                                 v-model="client.phone"
                              />
                           </div>
                        </div>
                        <div class="col">
                           <div class="form-group">
                              <label>Email:</label>
                              <input
                                 type="email"
                                 class="form-control"
                                 v-model="client.email"
                              />
                           </div>
                        </div>
                        <div class="col">
                           <div class="form-group">
                              <label>Address:</label>
                              <input
                                 type="text"
                                 class="form-control"
                                 v-model="client.address"
                              />
                           </div>
                        </div>
                     </div>

                     <div class="form-row">
                        <div class="col-sm-6 col-12">
                           <div class="h4">Payments</div>
                        </div>
                        <div class="col-sm-6 col-12">
                           <div class="form-row form-inline justify-content-end">
                              <div class="col-auto my-1">
                                 <a class="btn btn-primary" @click.prevent="addPayment" >Add Payment</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="form-row">
                        <div class="col">
                           <div class="form-group">
                              <label>Transaction Id:</label>
                              <input
                                 type="text"
                                 class="form-control"
                                 v-model="payment.transactionid"
                              />
                           </div>
                        </div>
                        <div class="col">
                           <div class="form-group">
                              <label>Amount:</label>
                              <input
                                 type="text"
                                 class="form-control"
                                 v-model="payment.amount"
                              />
                           </div>
                        </div>
                        <div class="col">
                           <div class="form-group">
                              <label>Date:</label>
                              <input
                                 type="date"
                                 class="form-control"
                                 v-model="payment.date"
                              />
                           </div>
                        </div>
                     </div>
                     <hr>
                     <div class="form-row" v-for="payment in payments" :key="payment.id">
                        <div class="col">
                           <div class="form-group">
                              <label>Transaction Id:</label>
                              <input
                                 type="text"
                                 class="form-control"
                                 v-model="payment.transactionid"
                              />
                           </div>
                        </div>
                        <div class="col">
                           <div class="form-group">
                              <label>Amount:</label>
                              <input
                                 type="text"
                                 class="form-control"
                                 v-model="payment.amount"
                              />
                           </div>
                        </div>
                        <div class="col">
                           <div class="form-group">
                              <label>Date:</label>
                              <input
                                 type="date"
                                 class="form-control"
                                 v-model="payment.date"
                              />
                           </div>
                        </div>
                     </div>
                     <button type="submit" class="btn btn-primary btn-block  mt-4">
                        Save
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "CreateClient",
   data() {
      return {
         client: {
            firstname: "",
            lastname: "",
            dob: "",
            phone: "",
            email: "",
            address: "",
            payments: 1,
            total: 1.0,
         },
         payment: {
            transactionid: "",
            amount: "",
            date: "",
         },
         payments: [],
      };
   },
   methods: {
      createClient() {
         this.client["paymentsList"] = this.payments;
         console.log(this.client);
         let url = "http://localhost:8000/api/client/"
         this.axios.post(url, this.client).then((response) => {
            this.$swal.fire(
               'Good job!',
               'You created the client successfully!',
               'success'
            )
            this.$router.push('/')
            console.log(response.data);
         })
      },
      addPayment() {
         this.payments.push({
            transactionid: this.payment.transactionid,
            amount: this.payment.amount,
            date: this.payment.date,
         });
         this.payment = {};
      }
   },
};
</script>
