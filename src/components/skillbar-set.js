import React from 'react'

class SkillBarSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };       
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false })
    }, 3800);
  }

  render() {
    const { collapsed } = this.state;
    const { hue, saturation, skills } = this.props;

    return (      
      <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>        
        <ul className="skills">
          {skills.map((skill, index) => 
              <li key={skill.name} 
                  style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)` }}>
                <p>                
                  {skill.name}
                  <span>
                    {skill.level === 25 ? 'Decent' 
                      : skill.level === 50 ? 'Good'
                      : skill.level === 75 ? 'Great'
                      : skill.level === 100 ? 'Awesome'
                      : 'unspecified'}
                  </span>
                </p>
              </li>
          )}
        </ul>
      </div>
    )
  }
}

export default SkillBarSet