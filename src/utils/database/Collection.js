module.exports = class Collection {
  constructor(model) {
    this.model = model
  }

  /**
     *
     * @param _id
     * @returns {*}
     */
  findOneById(_id) {
    return this.findOne({ _id })
  }

  /**
     *
     * @param args
     */
  findOne(...args) {
    return this.model.findOne(...args)
  }

  /**
     *
     * @param _id
     * @returns {Promise<Promise|vo_id|*>}
     */
  async getAndDelete(_id) {
    const data = await this.findOneById(_id)
    if (data) {
      return this.model.findOneAndDelete({ _id })
    } else {
      return undefined
    }
  }

  /**
     *
     * @param _id
     * @param defaultValues
     * @returns {Promise<Promise|vo_id|*>}
     */
  async getOrCreate(_id, defaultValues = {}) {
    const data = await this.findOneById(_id)
    if (!data) {
      return this.model({ _id, ...defaultValues }).save()
    }
    return data
  }
}