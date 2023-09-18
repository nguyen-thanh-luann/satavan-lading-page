export const SWR_KEY = {
  filter_product: 'filter_product',
  get_product_list: 'get_product_list',
  get_user_information: 'get_user_information',

  news_category_list: 'news_category_list',
  news: 'news',
  tag_list: 'tag_list',
  news_detail: 'news_detail',

  get_category_list: 'get_category_list',
  get_category_minor_list: 'get_category_minor_list',
  
  attribute_minor_list: 'attribute_minor_list',
  product_list: 'product_list',
  get_category_minor_list_filter: 'get_category_minor_list_filter',
  get_attribute_minor_list_filter: 'get_attribute_minor_list_filter',
  get_category_list_filter: 'get_category_list_filter',

  get_product_promotion: 'get_product_promotion',
  get_product_detail: 'get_product_detail',
  get_product_description: 'get_product_description',

  checkout_carrier_method: 'checkout_carrier_method',
  checkout_paymet_method: 'checkout_paymet_method',

  get_user_shipping_address: 'get_user_shipping_address',

  get_user_address: 'get_user_address',

  order_draft: 'order_draft',
  get_order_status: 'get_order_status',
  get_payment_method: 'get_payment_method',
  get_delivery: 'get_delivery',
  get_order_history_list: 'get_order_history_list',
  get_order_history_detail: 'get_order_history_detail',

  cart_list: 'cart_list',
  cart_count: 'cart_count',
  cart_company_promotion: (id: number) => `cart_company_promotion_${id}`,
  orders: 'orders',
  promotions: ({ sale_order_id, customer_id }: { sale_order_id: number; customer_id: number }) =>
    `promotions-${sale_order_id}-${customer_id}`,
  globalPromotions: 'global_promotions',
  promotionsApplyOnOrder: (companyId: number) => `promotions_apply_on_order_${companyId}`,
  promotionsApplyOnProduct: (productId: number) => `promotions_apply_on_product_${productId}`,
  promotionsApplyOnCategory: (categoryId: number) => `promotions_apply_on_category_${categoryId}`,
  cartSummary: `cart_summary`,
  cartSummaryLoading: `cart_summary_loading`,
  userInfo: 'userInfo',
  orderHistoryList: 'order_history_list',
  orderHistoryDetail: (id: number) => 'order_history_detail_' + id,
  shareOrderFile: (id: number) => 'share_order_file_' + id,
  getOrderStatus: 'get_order_satus',
  get_customers: 'get_customers',
  list_promotion: 'list_promotion',
  personal_promotions: 'personal_promotions',
  promotion_detail: 'promotion_detail',
} as const
