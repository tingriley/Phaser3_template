level2.preload = function ()
{


},

level2.create = function ()
{


    var background = this.physics.add.image(
    worldX/2, // x position
    worldY/2, // y position
    'background', // key of image for the sprite
  );
    
    var startText = this.add.text(
    this.physics.world.bounds.width / 2,
    this.physics.world.bounds.height / 2,
    'This is Level 2.',
    {
      fontFamily: 'Monaco, Courier, monospace',
      fontSize: '30px',
      fill: '#fff',
    },
  );
    startText.setOrigin(0.5);
    
          
  
    
       
},


level2.update = function ()
{
    
}
    
