using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Imagine.Controllers
{
    public class HackController : Controller
    {
 
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Main()
        {
            return View();
        }
        public IActionResult Ferramentas()
        {
            return View();
        }
        public IActionResult Team()
        {
            return View();
        }
        public IActionResult Eu()
        {
            return View();
        }


    }
}
