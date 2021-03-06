import { GatsbyNode } from 'gatsby'

import { generateMyPost } from './post-templates/my-post/my-post.generator'
import { generateTags } from './post-templates/tags/tags.generator'

export const createPages: GatsbyNode['createPages'] = async (args) => {
  await generateMyPost(args)
  await generateTags(args)
}
