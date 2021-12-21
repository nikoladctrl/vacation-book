using Microsoft.EntityFrameworkCore.Migrations;

namespace EFCore.Migrations
{
    public partial class RemoveColumnFromEmployeesTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OnVacation",
                table: "Employeees");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "OnVacation",
                table: "Employeees",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }
    }
}
