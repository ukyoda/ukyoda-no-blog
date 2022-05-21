import { GatsbyNode } from 'gatsby'

import { generateMyPost } from './templates/my-post/my-post.generator'

export const createPages: GatsbyNode['createPages'] = async (args) => {
  await generateMyPost(args)
}
