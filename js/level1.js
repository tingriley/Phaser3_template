level1.preload = function ()
{


},

level1.create = function ()
{


    var background = this.physics.add.image(
    worldX/2, // x position
    worldY/2, // y position
    'background', // key of image for the sprite
  );
    
    var startText = this.add.text(
    this.physics.world.bounds.width / 2,
    this.physics.world.bounds.height / 2,
    'Hi! This is Level 1.\nPress SPACE to enter level 2',
    {
      fontFamily: 'Monaco, Courier, monospace',
      fontSize: '30px',
      fill: '#fff',
    },
  );
    startText.setOrigin(0.5);
    
          
  this.input.keyboard.on('keydown', function (event) {

       if(32 == event.keyCode){
           menu.scene.start('level2');
       }

    });
    
       
},


level1.update = function ()
{
    
}
    
