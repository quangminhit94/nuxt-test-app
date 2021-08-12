<template>
  <section>
    <div class="card">
      <div class="show-card">
        <button class="icon-button"><svg-icon name="open-eye" class="icon"/> Show card number</button>
      </div>
      <div class="card-detail mb-24">
        <div class="logo mb-24">
          <svg-icon name="aspire" class="icon"/>
        </div>
        
        <div class="info">
          <h1 class="mb-24 mt-0 white-text">Mark Henry</h1>
          <p class="card-number mb-10">
            <span class="mr-24">****</span>
            <span class="mr-24">****</span>
            <span class="mr-24">****</span>
            <span>2020</span>
          </p>
          <p class="card-number">
            <span class="mr-24">Thru: 12/20</span>
            <span>CVC: ***</span>
          </p>
        </div>

        <div class="logo">
          <svg-icon name="visa" class="icon"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card {
  
  .show-card {
    display: flex;
    justify-content: flex-end;
    
    .icon-button {
      color: $colorPrimary;
      background-color: white;

      border: 0;
      border-top-left-radius: $radius;
      border-top-right-radius: $radius;
    }
    .icon {
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  .card-detail {
    padding: 1.2rem;

    color: white;
    background-color: $colorPrimary;

    border-radius: $radius;

    .logo {
      text-align: right;
      .icon {
        width: 3.5rem;
        height: 1rem;
      }
    }
  }
}
.white-text {
  color: white
}
</style>