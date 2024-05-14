<script>
import ManufacturerSidePanel from '../components/Manufacturer/ManufacturerSidePanel.vue'
import CreateBatch from '../components/Manufacturer/CreateBatch.vue'
import CreateProduct from '../components/Manufacturer/CreateProduct.vue'

export default {
  components: {
    ManufacturerSidePanel,
    CreateBatch,
    CreateProduct
  },
  data () {
    return {
      activeSection: 'create-batch'
    }
  },
  methods: {
    handleSectionChange (newSection) {
      this.activeSection = newSection
    }
  }
}
</script>

<template>
  <main>
    <ManufacturerSidePanel :active-section="activeSection" @section-change="handleSectionChange" />
      <div v-if="activeSection === 'create-product'">
          <CreateProduct />
      </div>
      <div v-if="activeSection === 'create-batch'">
          <CreateBatch />
      </div>
  </main>
</template>
