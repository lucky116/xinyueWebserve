// translate router.meta.title, be used in breadcrumb sidebar tagsview
export function generateTitle (title) {
    const hasKey = this.title
    if (hasKey) {
        // $t :this method from vue-i18n, inject in @/lang/index.js
        const translatedTitle = this.$route.title
        return translatedTitle
    }
    return title
}
