import RecipeTile from '../../app/javascript/components/RecipeTile'

describe('Recipe Tile', () => {
  let wrapper

  beforeEach(() => {
    jasmineEnzyme()

    wrapper = mount(
      <RecipeTile
        id={ 1 }
        title='hot dog'
        description='ball park favorite'
        image='imageurl'
      />
    )
  })

  it('should have a title within a <h2>', () => {
    expect(wrapper.find('h2').at(0)).toIncludeText('hot dog')
  })

  it('should have a description within a <p>', () => {
    expect(wrapper.find('p').at(0)).toIncludeText('ball park favorite')
  })

  it('should have a span with the className recipe_tile', () => {
    expect(wrapper.find('span')).toHaveProp('className', 'recipe_tile')
  })

  it('should have a link that links to the show page', () => {
    expect(wrapper.find('Link')).toHaveProp('to', '/recipes/1')
  })
})
