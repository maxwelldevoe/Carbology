import RecipeShowTile from '../../app/javascript/components/RecipeShowTile'

describe('Recipe Show Tile', () => {
  let wrapper

  beforeEach(() => {
    jasmineEnzyme()

    wrapper = mount(
      <RecipeShowTile
        id={ 1 }
        title='hot dog'
        ingredients='hot dog, bun, ketchup'
        instructions='boil hot dog, toast bun, add ketchup'
      />
    )
  })

  it('should have a title within a <h3>', () => {
    expect(wrapper.find('h3').at(0)).toIncludeText('hot dog')
  })

  it('should have a list of ingredients within a <ul>', () => {
    expect(wrapper.find('ul').at(0)).toIncludeText('hot dog, bun, ketchup')
  })

  it('should have a list of instructions within a <ol>', () => {
    expect(wrapper.find('ol').at(0)).toIncludeText('boil hot dog, toast bun, add ketchup')
  })

  it('should have a div with foundation parameters', () => {
    expect(wrapper.find('div').at(0)).toHaveProp('className', 'small-12 large-8 columns')
  })

  it('should have a div with the className lists', () => {
    expect(wrapper.find('div').at(1)).toHaveProp('className', 'lists')
  })

  it('should have a h3 with the className title', () => {
    expect(wrapper.find('h3')).toHaveProp('className', 'title')
  })
})
