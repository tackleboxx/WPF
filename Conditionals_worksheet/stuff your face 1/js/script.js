// JavaScript Stuff your face 1 | Robert Dunn | Expressions Worksheet | 10-14-13

/* Stuff your face I

 To get in the heavyweight division of the Strawberry Festival’s pie eating contest you must weigh 250 lbs or more.  Determine whether an entrant qualifies based on his weight.

 Given:
 Competitor’s weight.
 Result:
 “The competitor qualifies for the heavyweight division.” Or  “ The competitor needs to gain some weight!”

 */
var competitor = 300; // person in competition
var competitorWeight = 250; //given var


if( competitor < competitorWeight ) {
    console.log("The competitor qualifies for the heavyweight division");
}else {
    console.log("The competitor needs to gain some weight");
}
