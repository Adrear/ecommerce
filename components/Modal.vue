<template id="modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <div slot="body" class="row">
                <div style="text-align: center" class="col-md-6">
                  <img class="img-modal" src="/maneken.png">
                </div>
                <div class="col-md-6">
                  <table>
                    <tr>
                      <th />
                      <td>{{ $t('products.modal1') }}</td>
                      <td>{{ $t('products.modal2') }}</td>
                      <td>{{ $t('products.modal3') }}</td>
                      <td>{{ $t('products.modal4') }}</td>
                    </tr>
                    <tr>
                      <th>XS</th>
                      <td>44</td>
                      <td>85-89</td>
                      <td>64</td>
                      <td>67</td>
                    </tr>
                    <tr>
                      <th>S</th>
                      <td>45</td>
                      <td>89-91</td>
                      <td>65</td>
                      <td>69</td>
                    </tr>
                    <tr>
                      <th>M</th>
                      <td>48</td>
                      <td>94-97</td>
                      <td>66</td>
                      <td>70</td>
                    </tr>
                    <tr>
                      <th>L</th>
                      <td>50</td>
                      <td>99-104</td>
                      <td>67</td>
                      <td>70</td>
                    </tr>
                    <tr>
                      <th>XL</th>
                      <td>52</td>
                      <td>107-112</td>
                      <td>68</td>
                      <td>75</td>
                    </tr>
                  </table>
                </div>
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
    overflow-y: auto;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    max-width: 900px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(odd) {
    background-color: #eeeeee;
  }

  .img-modal{
    height: 400px;
  }
  @media (max-width: 768px) {
    .img-modal{
      height: 250px;
    }
    .modal-container {
      min-height: 100vh;
    }
  }
</style>
