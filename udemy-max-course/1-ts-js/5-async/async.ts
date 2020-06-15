function wait(ms: number): Promise<void>
{
    return new Promise(res => setTimeout(res, ms));
}

async function startAsync(callback: any): Promise<void>
{
    await wait(1000);
    callback('Hello');
    await wait(1000);
    callback('And Welcome');
    await wait(1000);
    callback('To Async Await Using TypeScript');
}

startAsync(text => console.log(text));


/*
  function start(callback: any)
  {
      setTimeout(() =>
      {
          callback('Hello');
          setTimeout(() =>
          {
              callback('And Welcome');
              setTimeout(() =>
              {
                  callback('To Async Await Using TypeScript');
              }, 1000);
          }, 1000);
      }, 1000);
  };
  start(text => console.log(text));
  */