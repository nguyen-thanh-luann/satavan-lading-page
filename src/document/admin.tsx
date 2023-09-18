import {
  FeatherOutlineIcon,
  MenuSquareDotOutlineIcon,
  NotebookIconOutlinePlus,
  TagIcon
} from '@/assets'

export const ADMIN_NAV_DATA = [
  {
    path: '/admin',
    title: 'Bài viết',
    icon: <NotebookIconOutlinePlus className="" />,
  },
  {
    path: '/admin/edit-news',
    title: 'Thêm bài viết',
    icon: <FeatherOutlineIcon className="" />,
  },
  {
    path: '/admin/news-category',
    title: 'Danh mục bài viết',
    icon: <MenuSquareDotOutlineIcon className="" />,
  },
  {
    path: '/admin/tag',
    title: 'Tags',
    icon: <TagIcon className="" />,
  },
]
